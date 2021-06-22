using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Car_controler : MonoBehaviour
{
    private const string HORIZONTAL = "Horizontal";
    private const string VERTICAL = "Vertical";

    private float horizontalInput;
    private float verticalInput;
    private bool isBreaking;
    private float currentbreakForce;

    [SerializeField] private float motorForce;
    [SerializeField] private float breakForce;
    [SerializeField] private float maxStreerAngle;

    [SerializeField] private WheelCollider frontLeftWheelCollider;
    [SerializeField] private WheelCollider frontRightWheelCollider;
    [SerializeField] private WheelCollider rearLeftWheelCollider;
    [SerializeField] private WheelCollider rearRight  WheelCollider;

    private void FixedUpdate()
    {
        GetInput();
        HandleMorter();
        HandleStreering();
        
        
    }

    private void GetInput()
    {
        horizontalInput = Input.GetAxis(Horizontal);
        verticalInput = Input.GetAxis(Vertical);
        isBreaking = input.GetKey(KeyCode.Space); 
    }

    private void HandleMorter()
    {
        frontLeftWheelCollider.motorTorque = verticalInput*motorForce; 
        rearLeftWheelCollider.motorTorque = verticalInput*motorForce; 
        breakForce = isBreaking ? breakForce : 0f ;
        if (isBreaking)
        {
            ApplyBreaking()
        }
    }

    private void ApplyBreaking()
    {
        frontRightWheelCollider.breakTorque =  currentbreakForce;  
        frontLeftWheelCollider.breakTorque =  currentbreakForce;
        rearLeftWheelCollider.breakTorque =  currentbreakForce;
        rearRightWheelCollider.breakTorque =  currentbreakForce;
    }

    private void HandleStreering()
    {
        currentStreerAngle = maxStreerAngle = horizontalInput;
        frontLeftWheelCollider.StreerAngle = currentStreerAngle;
        frontRightWheelCollider.StreerAngle = currentStreerAngle;

    }

    
}
