using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarPcController : MonoBehaviour
{
    public WheelCollider WheelCollider_FL_pc;
    public WheelCollider WheelCollider_FR_Pc;
    public WheelCollider WheelCollider_RL_pc;
    public WheelCollider WheelCollider_RR_pc;    
    
    public GameObject FLeft_pc;
    public GameObject FRight_pc;
    public GameObject RLeft_pc;
    public GameObject RRight_pc;

    public float maxSpeed_pc;
    public float minSpeed_pc;
    public float maxStreer_pc; 
   

    /*for moblie

    public float StreewheelFormMoblie;
    public float motorWheelsFromMobile;
 //   private Rigidbody rB;


  /*  private void Awake()
    {
        rB = GetComponent<Rigidbody>();

    }*/

    private void FixedUpdate()
    {
      float motorT = Input.GetAxis("Vertical") * maxSpeed_pc;
      float StreerT= Input.GetAxis("Horizontal") * maxStreer_pc;

  

   
     /*streer of  mobile

     float steerT = StreewheelFormMoblie * maxStreer_pc; 
     float motorT = motorWheelsFromMobile * maxSpeed_pc ;
     

*/

  /*
        WheelCollider_FL_pc.steerAngle = steerT;
         WheelCollider_FR_Pc.steerAngle = steerT;

        // Move
        // Back Weels

        WheelCollider_RL_pc.motorTorque = motorT;
        WheelCollider_RR_pc.motorTorque = motorT;
 */
        // Get Rotation For Wheels Objects

        // Front Wheel right
        Vector3 pos;
        Quaternion rotationQ;
        WheelCollider_FL_pc.GetWorldPose(out pos, out rotationQ);
        FLeft_pc.transform.position = pos;
        FLeft_pc.transform.rotation = rotationQ;

        // Front wheel Left
        Vector3 pos1;
        Quaternion rotationQ1;
        WheelCollider_FR_Pc.GetWorldPose(out pos1, out rotationQ1);
        FRight_pc.transform.position = pos1;
        FRight_pc.transform.rotation = rotationQ1;


        // Back Wheel Right
        Vector3 pos2;
        Quaternion rotationQ2;
        WheelCollider_RL_pc.GetWorldPose(out pos2, out rotationQ2);
        RLeft_pc.transform.position = pos2;
        RLeft_pc.transform.rotation = rotationQ2;

        // wheel Bottom left
        Vector3 pos3;
        Quaternion rotationQ3;
        WheelCollider_RR_pc.GetWorldPose(out pos3, out rotationQ3);
        RRight_pc.transform.position = pos3;
        RRight_pc.transform.rotation = rotationQ3;


        //disable to can car move
       
        if (Mathf.Abs(Input.GetAxis("Vertical")) > 0.01f)
        {

            WheelCollider_RL_pc.brakeTorque = 0;
            WheelCollider_RR_pc.brakeTorque = 0;
            
        } else
        {

            WheelCollider_RL_pc.brakeTorque = 400f;
            WheelCollider_RR_pc.brakeTorque = 400f;

        } 
       



    }
/*
    public void Brake()
    {
        float motorT = motorWheelsFromMobile * minSpeed_pc ;

    }

*/







}