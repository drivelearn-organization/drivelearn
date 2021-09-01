using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TriggerObject1 : MonoBehaviour
{
   public GameObject LeftturnBoard;

   void OnTriggerEnter(Collider other)
   {
       LeftturnBoard.SetActive(true);

   }
}
