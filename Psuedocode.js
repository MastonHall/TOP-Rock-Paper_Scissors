cpuPlay <-- blank String
playerPlay <-- blank String

FUNCTION getComputerChoice 
    generate random number between 1 and 3 and assign it to cpuPlay variable

    IF  cpuPlay is one then
        PRINT Rock 
    ELSEIF cpuPlay is two then
        PRINT Paper 
    ELSEIF cpuPlay is three then 
        PRINT Scissors 
    ENDIF

FUNCTION getHumanChoice 
    playerPlay <-- prompt user to input either rock paper or Scissors 

    IF playerPlay is Rock then 
        playerPlay <-- Rock 
    ELSEIF playerPlay is Paper then 
        playerPlay <-- Paper 
    ELSEIF playerPlay is Scissors then 
        playerPlay <-- Scissors 
    ENDIF 