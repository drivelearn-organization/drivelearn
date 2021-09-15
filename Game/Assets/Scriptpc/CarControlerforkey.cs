using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarControlerforkey : MonoBehaviour
{
    // Start is called before the first frame update
     public float speed;
     public float respeed;
     public float turnspeed;

       Rigidbody rb;

    void Start()
    {
       rb = GetComponent<Rigidbody>();

    }

    // Update is called once per frame
    void FixedUpdate()
    {
        Move();
        Turn();
       
    }

    void Move()
    {
        if(Input.GetKey(KeyCode.W))
        {
            rb.AddRelativeForce(new Vector3(Vector3.forward.x,0,Vector3.forward.z) * speed *2); 
        }
        if(Input.GetKey(KeyCode.S))
        {
            rb.AddRelativeForce(-(new Vector3(Vector3.forward.x,0,Vector3.forward.z) * respeed *2)); 
        }
        Vector3 localVelocity = transform.InverseTransformDirection(rb.velocity);
        localVelocity.x = 0;
        rb.velocity = transform.TransformDirection(localVelocity);
    }

    void Turn()
    {
         if(Input.GetKey(KeyCode.D))
        {
            rb.AddTorque(Vector3.up * turnspeed *2); 
        }
        if(Input.GetKey(KeyCode.A))
        {
            rb.AddTorque(-Vector3.up * turnspeed*2 ); 
        }

    }
}
