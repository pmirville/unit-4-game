$(document).ready(function () {
            /* Array of all the Crystal Values */
            var crystalValues = [0, 0, 0, 0];

            /* Totals Tracked During Game */
            var targetNumber = 0;
            var currentTotal = 0;
            var numWins = 0;
            var numLosses = 0;

            /* ======== FUNCTIONS ========== */

            function resetGame() {
                /* For each array element, set random number between 1 and 12 */
                /* Math.random()*11 returns number between 0 and 11
                Adding 1 returns number between 1 and 12 */
                for (var i = 0; i < crystalValues.length; i++) {
                    crystalValues[i] = Math.floor(Math.random() * 12) + 1;
                    console.log("Reset Crystal Value at Index: " + i + ". New Value: " + crystalValues[i]);
                }

                /* Set Target Number to random number between 19 and 120 */
                /* Math.random()*101 returns number between 0 and 101
                    Adding 19 returns number between 19 and 120 */
                targetNumber = Math.floor(Math.random() * 101) + 19;
                console.log("Reset Target Number: " + targetNumber);

                /* Reset Current Total */
                currentTotal = 0;
                /* SHOW Current Total After Reset */
                console.log("Reset Current Total: " + currentTotal);

                /* SHOW Wins/Losses After Reset */
                console.log("Wins After Reset: " + numWins);
                console.log("Losses After Reset: " + numLosses);
                $("#winLossDiv")
            }


            /* When a button is clicked, add its value to current total */
            /* Check for win/loss condition */
            function crystalClicked(i) {
                /* Add Value of Clicked Crystal to Current Total */
                console.log("Button " + i + " clicked with value: " + crystalValues[i]);
                currentTotal = currentTotal + crystalValues[i];

                /* SHOW TALLY OF CURRENT TOTAL AFTER THE CLICK */
                console.log("New Current Total: " + currentTotal);

                /* If GAME IS WON UPON CLICK*/
                if (currentTotal == targetNumber) {
                    /* SHOW THAT YOU WON */
                    console.log("You Win!");
                    /* INCREMENT WINS */
                    numWins++;
                    /* RESET THE GAME */
                    resetGame();
                }

                /* If GAME IS LOST UPON CLICK */
                if (currentTotal >= targetNumber) {
                    /* SHOW THAT YOU LOST */
                    console.log("Current Total: " + currentTotal);
                    console.log("Target Number: " + targetNumber);
                    console.log("You Lose!");
                    /* INCREMENT LOSSES */
                    numLosses++;
                    /* RESET THE GAME */
                    resetGame();
                }
            }


            /* Log initial Values Test */
            for (var i = 0; i < crystalValues.length; i++) {
                console.log("Initial crystalValue at index " + i + ": " + crystalValues[i]);
            }
            console.log("Initial Target Number: " + targetNumber);
            console.log("Initial Current Total: " + currentTotal);
            console.log("Initial Wins: " + numWins);
            console.log("Initial Losses: " + numLosses);


            /* Initialize Game */
            resetGame();

            $("button1Div").click(function () {
                alert("Button1 was clicked.");
                crystalClicked(0);
            });

            $("button1Div").click(function () {
                alert("Button2 was clicked.");
                crystalClicked(1);
            });

            $("button1Div").click(function () {
                alert("Button3 was clicked.");
                crystalClicked(2);
            });

            $("button1Div").click(function () {
                alert("Button4 was clicked.");
                crystalClicked(3);
            });




        });