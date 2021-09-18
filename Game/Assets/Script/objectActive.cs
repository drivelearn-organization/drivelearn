using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class objectActive : MonoBehaviour
{

    public GameObject referenceObject_01;
    
   
   public void Active_01()
   {
        referenceObject_01.SetActive(true);
   }
    public void Deactive_01()
   {
        referenceObject_01.SetActive(false);
   }
  
}
