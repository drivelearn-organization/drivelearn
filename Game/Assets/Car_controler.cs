using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Car_controler : MonoBehaviour
{
    private const string HORIZONTAL = "Horizontal" ;
    private const string VERTICAL = "vertical" ;

    private float horizontalInput;
    private float verticalInput;
    private float steerAngle;
    private float currentBreakForce;
    private bool isBreaking  ;

    [SerializedField] private float motorForce;
    [SerializedField] private float breakForce;
    [SerializedField] private float maxStreerAngle;

    [SerializedField] private WheelCollider WheelCollider_FL;
    [SerializedField] private WheelCollider WheelCollider_FR;
    [SerializedField] private WheelCollider WheelCollider_RL;
    [SerializedField] private WheelCollider WheelCollider_RR;

    private void FixedUpdate()
    {
        GetInput();
        HandleMorter();
        HandleStreering();
        UpdaterWheels();

    }
    private void GetInpuut()
    {
        horizontalInput = Input.GetAxis(HORIZONTAL);
        verticalInput = Input.GetAxis(VERTICAL);
        isBreaking = Input.GetKey(KeyCode.Space);

    }
    private void HandleMorter()
    {
        WheelCollider_FL.mortorTorque = verticalImput * motorForce;
        WheelCollider_FR .mortorTorque = verticalImput * motorForce;
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
        WheelCollid  er_RL .brakeTorque = currentBreakForce;

    }

    private void HandleStreering()
    {
        steerAngle = maxStreerAngle = horizontalInput;
        frontLeftWheelCollider.steerAngle = steerAngle ;
    }
    
     
}
