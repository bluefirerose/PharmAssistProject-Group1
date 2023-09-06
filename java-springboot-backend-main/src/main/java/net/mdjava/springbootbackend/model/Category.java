/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package net.mdjava.springbootbackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "categories")

/**
 *
 * @author eMDi
 */
public class Category {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private int age;
    
    @Column(name = "address")
    private String address;

    @Column(name = "contactno")
    private String contactno;

    @Column(name = "emailadd")
    private String emailadd;

     @Column(name = "medicalcondition")
    private String medicalcondition;

    @Column(name = "prescription")
    private String prescription;


    @Column(name = "quantity")
    private int quantity;
}
