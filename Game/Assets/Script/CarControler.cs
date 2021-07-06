using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarControler : MonoBehaviour
{
    //get input 
    //move sphere useing input
    //set the car position to sphere
    private float moveInput;
    private float turnInput;

    public float ForwardForce;
    public Rigidbody sphereRB;
    public float revSpeed;
    public float turnSpeed;



    void Strat()
    {
        sphereRB.transform.parent = null;
    }

    void Update()
    {
        moveInput = Input.GetAxisRaw("Vertical");
        turnInput = Input.GetAxisRaw("Horizontal");

        moveInput *= moveInput > 0 ? ForwardForce : revSpeed;

        if (moveInput > 0)
        {
            //go forward
            moveInput *= ForwardForce;

        }
        else
        {
            //go backward
            moveInput *= revSpeed ;
        }

        // set the car position to sphere
        transform.position = sphereRB.transform.position;

        //CarRotation
        float newRotation = turnInput * turnSpeed * Time.deltaTime * Input.GetAxisRaw("Vertical");
        transform.Rotate(0, newRotation, 0);
    }

    private void FixedUpdate()
    {
        sphereRB.AddForce(transform.forward * moveInput, ForceMode.Acceleration);
    }
}


