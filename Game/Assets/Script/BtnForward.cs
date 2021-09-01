using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BtnForward : MonoBehaviour
{
    public static int Forward = 0 ;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void OnPointerDown()
    {
        BtnForward.Forward = 0 ;

    }
    public void OnPointerUp()
    {
        BtnForward.Forward = 1 ;
        
    }
}
