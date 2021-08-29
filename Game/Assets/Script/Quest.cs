using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement; 

public class Quest : MonoBehaviour
{
   public static bool QuestIsOn = false;
   public GameObject QuestUi;

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            if(QuestIsOn)
            {
                Resume();
            }
            else
            {
                Pause();
            }
        }
    }


    public  void Resume()
    {
        QuestUi.SetActive(false);
        Time.timeScale = 1f;
        QuestIsOn = false ;

    }

    void Pause ()
    {
     QuestUi.SetActive(true);
     Time.timeScale = 0f;
     QuestIsOn = true;     
    }
    
    public void LoadMenu()
    {
        Debug.Log("Loading menu...");

    }
}