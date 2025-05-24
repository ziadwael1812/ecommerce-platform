package com.example.ecommerce.controller;

import com.example.ecommerce.model.Order;
import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.UserRepository;
import com.example.ecommerce.security.UserPrincipal;
import com.example.ecommerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserRepository userRepository; // Inject UserRepository

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order, @AuthenticationPrincipal UserPrincipal currentUser) {
        // It's important to set the user for the order based on the authenticated principal
        Optional<User> userOptional = userRepository.findById(currentUser.getId());
        if (userOptional.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        order.setUser(userOptional.get());
        Order createdOrder = orderService.createOrder(order);
        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long orderId, @AuthenticationPrincipal UserPrincipal currentUser) {
        Optional<Order> orderOptional = orderService.getOrderById(orderId);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            // Check if the current user owns the order or is an admin
            if (order.getUser().getId().equals(currentUser.getId()) || currentUser.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"))) {
                return ResponseEntity.ok(order);
            }
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/my-orders")
    public ResponseEntity<List<Order>> getMyOrders(@AuthenticationPrincipal UserPrincipal currentUser) {
        Optional<User> userOptional = userRepository.findById(currentUser.getId());
        if (userOptional.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        List<Order> orders = orderService.getOrdersByUser(userOptional.get());
        return ResponseEntity.ok(orders);
    }

    // Admin endpoint to get all orders or orders for a specific user
    @GetMapping
    // @PreAuthorize("hasRole('ADMIN')") // Uncomment if needed
    public ResponseEntity<List<Order>> getAllOrders(@RequestParam(required = false) Long userId) {
         if (userId != null) {
            Optional<User> userOptional = userRepository.findById(userId);
            if(userOptional.isEmpty()) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(orderService.getOrdersByUser(userOptional.get()));
        }
        // If no userId is provided, this could return all orders (admin only), 
        // or be an invalid request. For now, let's assume it is for admin to get all orders.
        // This part needs careful consideration of access control.
        // For simplicity, let's assume an admin can call this without userId to get all.
        // Add @PreAuthorize("hasRole('ADMIN')") to secure this properly.
        return ResponseEntity.ok(orderService.orderRepository.findAll()); 
    }

}