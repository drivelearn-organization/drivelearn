using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Controler : MonoBehaviour
{
    public Rigidbody TheRb;
    public float forwardAccel ;
    public float reverseAccel;
    public float maxSpeed;
    public float turnStrength;

    public GameObject ForwardUI;
    public GameObject BackwordUI;
    public GameObject RightUI;
    public GameObject LeftUL;
    
    private float speedInput;
    private float turnInput;
    //bool ispressed = false;




    // Start is called before the first frame update
    void Start()
    {
        TheRb.transform.parent = null; 
    }

    // Update is called once per frame
    void Update()
    {

        speedInput = 0f ;
        if (Input.GetAxis("Vertical")>0)
        {
            speedInput = Input.GetAxis("Vertical") *(forwardAccel * + 2) * 1f ;
        }
        else
        {
           speedInput = Input.GetAxis("Vertical") * reverseAccel * 1f ;
        }

        turnInput = Input.GetAxis("Horizontal");
        transform.rotation = Quaternion.Euler(transform.rotation.eulerAngles + new Vector3(0f,turnInput * turnStrength * Time.deltaTime * Input.GetAxis("Vertical") , 0f));


        transform.position = TheRb.transform.position;
    }
    private void FixedUpdate()
    {
       //TheRb.AddForce(transform.forward * forwardAccel);
       if(Mathf.Abs(speedInput) > 0)
       {
           TheRb.AddForce(transform.forward * speedInput);
       }
    }

  /* void ForwardForce()
    {
         speedInput = 0f ;
        if(ispressed = true)
        {
        speedInput = Input.GetAxis("Vertical") *(forwardAccel * + 2) * 1f ;
        }
        

    } */
}
