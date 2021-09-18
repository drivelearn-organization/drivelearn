using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class materialChaneg : MonoBehaviour
{
  public Material[] material;
  public int x;
  Renderer rend ;

    void Start()
    {
        x = 0;
        rend = GetComponent <Renderer>();
        rend.enabled = true;
        rend.sharedMaterial =material[x];

    }

    
    void Update()
    {
        rend.sharedMaterial = material[x];
    }

    public void Color00()
    {
        x=0;
       
       

    }
    public void Color01()
    {
        x=1;
        
    }

     public void Color02()
    {
        x=2;
        
    }


}
