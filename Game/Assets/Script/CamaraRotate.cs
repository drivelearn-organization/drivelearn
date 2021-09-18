using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CamaraRotate : MonoBehaviour
{
    [SerializeField] private Camera cam;
    [SerializeField] private Vector3 previousPosition;
    [SerializeField] private Vector3 _rotation; 
    [SerializeField]public float zoomLength;
    
    public float speed;
    public float timer = 0f;
    public float ScrollSpeed ;
   
    private GameObject targetPoint;
    bool isMouseDown = false;
    int phase =0;
    

   
    void FixedUpdate()
    {       

    plendulum();
    mousePoint();


        void plendulum()
        {
            timer += Time.fixedDeltaTime;

            if (timer > 4f)
            {
                phase++;
                phase %= 4;
                timer = 0f;
            }

            switch(phase)
            {
                case 0:
                        transform.Rotate(0f,speed*(4 -timer),0f );
                    break;

                case 1:
                        transform.Rotate(0f,-speed* timer,0f );
                    break;

                case 2:
                        transform.Rotate(0f,-speed*(4 -timer),0f );
                    break;

                case 3:
                        transform.Rotate(0f, speed* timer,0f );
                    break;

            }
        }

        void mousePoint()
        {
        
            if(Input.GetMouseButtonDown(0))
            {
                previousPosition = cam.ScreenToViewportPoint(Input.mousePosition);
            }

            if(Input.GetMouseButton(0))
            {
                Vector3 direction = previousPosition - cam.ScreenToViewportPoint(Input.mousePosition);
                cam.transform.position = new Vector3();
                cam.transform.Rotate(new Vector3(1,0,0),direction.y *3);
                cam.transform.Rotate(new Vector3(-1,0,0),direction.y *-3);
                cam.transform.Rotate(new Vector3(0,1,0), -direction.x *60, Space.World);
                cam.transform.Translate(new Vector3(0,0,zoomLength));
                previousPosition =cam.ScreenToViewportPoint(Input.mousePosition);

            }
        }
       
    }//Update
  
}