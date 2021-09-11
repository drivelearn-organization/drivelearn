using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarController : MonoBehaviour
{
    //Public Variable Car Colliders

    public WheelCollider WheelCollider_FL;
    public WheelCollider WheelCollider_FR;
    public WheelCollider WheelCollider_RL;
    public WheelCollider WheelCollider_RR;   

    //Public Variable Car objetcs
    
    public GameObject FLeft;
    public GameObject FRight;
    public GameObject RLeft;
    public GameObject RRight;

    //Public Variable Car values

    public float maxSpeed;
    public float minSpeed;
    public float maxStreer; 
   

    //for moblie 
  
    public float StreewheelFormMoblie;
    public float motorWheelsFromMobile;
    private Rigidbody rB;

   

    private void Awake()
    {
        rB = GetComponent<Rigidbody>();

    }
   

    private void FixedUpdate()
    {
   
     /*
     //pc Controller

     float motorT = Input.GetAxis("Vertical") * maxSpeed;
     float steerT = Input.GetAxis("Horizontal") * maxStreer;
   */
     //streer of  mobile
   
     float steerT = StreewheelFormMoblie * maxStreer; 
     float motorT = motorWheelsFromMobile * maxSpeed ;
     



  
         WheelCollider_FL.steerAngle = steerT;
         WheelCollider_FR.steerAngle = steerT;

        // Move
        // Back Weels

        WheelCollider_RL.motorTorque = motorT;
        WheelCollider_RR.motorTorque = motorT;

        // Get Rotation For Wheels Objects

        // Front Wheel right
        Vector3 pos;
        Quaternion rotationQ;
        WheelCollider_FL.GetWorldPose(out pos, out rotationQ);
        FLeft.transform.position = pos;
        FLeft.transform.rotation = rotationQ;

        // Front wheel Left
        Vector3 pos1;
        Quaternion rotationQ1;
        WheelCollider_FR.GetWorldPose(out pos1, out rotationQ1);
        FRight.transform.position = pos1;
        FRight.transform.rotation = rotationQ1;


        // Back Wheel Right
        Vector3 pos2;
        Quaternion rotationQ2;
        WheelCollider_RL.GetWorldPose(out pos2, out rotationQ2);
        RLeft.transform.position = pos2;
        RLeft.transform.rotation = rotationQ2;

        // wheel Bottom left
        Vector3 pos3;
        Quaternion rotationQ3;
        WheelCollider_RR.GetWorldPose(out pos3, out rotationQ3);
        RRight.transform.position = pos3;
        RRight.transform.rotation = rotationQ3;

        /*
        //disable to can car move
      
        if (Mathf.Abs(Input.GetAxis("Vertical")) > 0.01f)
        {

            WheelCollider_RL.brakeTorque = 0;
            WheelCollider_RR.brakeTorque = 0;
            
        } else
        {

            WheelCollider_RL.brakeTorque = 400f;
            WheelCollider_RR.brakeTorque = 400f;

        } 
       */



    }
    // Mobile bleack this function is not use for game 
    
    public void Brake()
    {
        float motorT = motorWheelsFromMobile * minSpeed ;

    }









}