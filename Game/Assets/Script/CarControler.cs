using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarControler : MonoBehaviour
{
    //get input 
    //move sphere useing input
    //set the car position to sphere
    private float moveInput;
    public float ForwardForce;
    public Rigidbody sphereRB;

    void Strat()
    {
        sphereRB.transform.parent = null;
    }

    void Update()
    {
        moveInput = Input.GetAxisRaw("Vertical");
        moveInput *= ForwardForce;

        // set the car position to sphere
        transform.position = sphereRB.transform.position;
    }

    private void FixedUpdate()
    {
        sphereRB.AddForce(transform.forward * moveInput , ForceMode.Acceleration);
    }
}


