using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement; 

public class PauseMenu : MonoBehaviour
{
   public static bool GameIsPaused = false;
   public GameObject PauseMenuUI;

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            if(GameIsPaused)
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
        PauseMenuUI.SetActive(false);
        Time.timeScale = 1f;
        GameIsPaused = false ;

    }

    void Pause ()
    {
     PauseMenuUI.SetActive(true);
     Time.timeScale = 0f;
     GameIsPaused = true;     
    }
    
    public void LoadMenu()
    {
        Debug.Log("Loading menu...");

    }

    public void QuitGame()
    {
       Application.Quit();
       Debug.Log("Game Closed");
    }
     public void OpenMenu_E()
   { 
       SceneManager.LoadScene("E_MainMenu");
   }
    public void OpenMenu_T()
   { 
       SceneManager.LoadScene("T_MainMenu");
   }
    public void OpenMenu_S()
   { 
       SceneManager.LoadScene("S_MainMenu");
   }
    public void Replay()
   { 
       SceneManager.LoadScene("Level");
   }
   //RepalyGame
    public void ReplayGame_S()
   { 
       SceneManager.LoadScene("S_Level01");
   }
    public void ReplayGame_E()
   { 
       SceneManager.LoadScene("E_Level01");
   }
    public void ReplayGame_T()
   { 
       SceneManager.LoadScene("T_Level01");
   }
    public void ReplayHighway()
   { 
       SceneManager.LoadScene("highway");
   }
}