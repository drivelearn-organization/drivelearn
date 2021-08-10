using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement; 

public class MainMenu : MonoBehaviour
{
   public void ExitButton()
   {
       Application.Quit();
       Debug.Log("Game Closed");
   }
   
   public void StartGame()
   { 
       SceneManager.LoadScene("Level01");
   }

   public void Level1()
   { 
       SceneManager.LoadScene("Level01");
   }
    public void Level2()
   { 
       SceneManager.LoadScene("Level02");
   }
   

}
