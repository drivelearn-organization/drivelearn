using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class showUi : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject uiObject;
    public GameObject DestroyuiObject;
    public GameObject BockerObject;
    public GameObject BockerObject1;
    public GameObject BockerObject2;
    //public GameObject HitActiveObject;
    
   
    
    
    void Start()
    {
        uiObject.SetActive(false);
    }

    // Update is called once per frame
   

   void OnTriggerEnter (Collider player)
   {
       if (player.gameObject.tag == "Player")
       {
           uiObject.SetActive(true);
           StartCoroutine("WaitForSec");
       }
   }

   IEnumerator WaitForSec()
   {
       yield return new WaitForSeconds(2);
       Destroy(BockerObject);
       Destroy(BockerObject1);
       Destroy(BockerObject2);
       Destroy(DestroyuiObject);
       //HitActiveObject.gameObject.SetActive(true);
       
       
   }
}
