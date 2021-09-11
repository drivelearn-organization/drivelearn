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
   
   public void StartGame_Sinhala()
   { 
       SceneManager.LoadScene("S_Level01");
   }
   public void StartGame_English()
   { 
       SceneManager.LoadScene("E_Level01");
   }
   public void StartGame_Tamil()
   { 
       SceneManager.LoadScene("T_Level01");
   }

   public void LevelHighWay()
   { 
       SceneManager.LoadScene("highway");
   }
    public void Level2()
   { 
       SceneManager.LoadScene("Level02");
   }

   //Menu load

    public void LoadMenu_Sinhala()
   { 
       SceneManager.LoadScene("S_MainMenu");
   }
   public void LoadMenu_English()
   { 
       SceneManager.LoadScene("E_MainMenu");
   }
   public void LoadMenu_Tamil()
   { 
       SceneManager.LoadScene("T_MainMenu");
   }
   

}
