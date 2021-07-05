using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Car_controler : MonoBehaviour
{
    private const string HORIZONTAL = "Horizontal" ;
    private const string VERTICAL = "Vertical" ;

    private float horizontalInput;
    private float verticalInput;
    private float currentSteerAngle;
    private float currentBreakForce;
    private bool isBreaking;

    [SerializeField] private float motorForce;
    [SerializeField] private float breakForce;
    [SerializeField] private float maxStreerAngle;
  

    [SerializeField] private WheelCollider WheelCollider_FL;
    [SerializeField] private WheelCollider WheelCollider_FR;
    [SerializeField] private WheelCollider WheelCollider_RL;
    [SerializeField] private WheelCollider WheelCollider_RR;
    

    [SerializeField] private Transform FL;
    [SerializeField] private Transform FR;
    [SerializeField] private Transform RL;
    [SerializeField] private Transform RR;

    private void FixedUpdate()
    {
        GetInput();
        HandleMotor();
        HandleStreering();
        UpdaterWheels();

    }
    private void GetInput()
    {
        horizontalInput = Input.GetAxis(HORIZONTAL);
        verticalInput = Input.GetAxis(VERTICAL);
        isBreaking = Input.GetKey(KeyCode.Space);

    }
    private void HandleMotor()
    {
        WheelCollider_FL.motorTorque = verticalInput * motorForce;
        WheelCollider_FR .motorTorque = verticalInput * motorForce;
        currentBreakForce = isBreaking ? breakForce : 0f ;
        if (isBreaking)
        {
            ApplyBreaking();
        }
    }

    private void ApplyBreaking()
    {
        WheelCollider_FR.brakeTorque = currentBreakForce;
        WheelCollider_FL.brakeTorque = currentBreakForce;
        WheelCollider_RR.brakeTorque = currentBreakForce;
        WheelCollider_RL.brakeTorque = currentBreakForce;

    }

    private void HandleStreering()
    {
        currentSteerAngle = maxStreerAngle * horizontalInput;
        WheelCollider_FL.steerAngle = currentSteerAngle;
        WheelCollider_FR.steerAngle = currentSteerAngle;
       
    }
    
     
    private void UpdaterWheels()
    {
        UpdaterSingelWheels(WheelCollider_FL,FL);
        UpdaterSingelWheels(WheelCollider_FR,FR);
        UpdaterSingelWheels(WheelCollider_RR,RR);
        UpdaterSingelWheels(WheelCollider_RL,RL);

    }

    private void UpdaterSingelWheels(WheelCollider wheelCollider, Transform wheelTransform)
    {
        Vector3 pos;
        Quaternion rot;
        wheelCollider.GetWorldPose(out pos , out rot);
        wheelTransform.rotation = rot ;
        wheelTransform.position = pos ;

         
    }
     
}
