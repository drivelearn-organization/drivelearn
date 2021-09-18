using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CamZoom : MonoBehaviour
{

    [SerializeField] public Camera cam;
    [SerializeField]public float zoomLength;
    public float ScrollSpeed ;
    public float minScrollSpeed ;
    public float MaxScrollSpeed ;



     private void Start()
    {
        cam = Camera.main;
    }

    void Update()
    {
        if(Camera.main)
        {
             cam.fieldOfView -= Input.GetAxis("Mouse ScrollWheel") * ScrollSpeed;
             Debug.Log(cam.fieldOfView);

             if(cam.fieldOfView > 75)
             {
                 ScrollSpeed =minScrollSpeed;
             }
             else if(cam.fieldOfView > 10)
             {
                 ScrollSpeed = MaxScrollSpeed;
             }
             else if (cam.fieldOfView<10)
             {
                 ScrollSpeed = minScrollSpeed;
             }
            
        }
    }

}
