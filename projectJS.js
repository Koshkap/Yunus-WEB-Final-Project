// projectJS.js
// Function to generate the meal plan
function generateMealPlan() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;
    // Validate email
    if (!validateEmail(email)) {
        alert('Invalid email address.');
        return; // Exit the function if email is invalid
    }
    // Gather meal inputs
    const Breakfast = document.getElementById('Breakfast').value;
    const Snack = document.getElementById('Snack').value;
    const Lunch = document.getElementById('Lunch').value;
    const Snack2 = document.getElementById('Snack2').value;
    const Dinner = document.getElementById('Dinner').value;
    // Open a new window for the meal plan
    const mealPlanWindow = window.open('', '_blank');
    // Write the meal plan HTML content
    mealPlanWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>${name}'s Meal Plan</title>
            <style>
                body { font-family: monospace; background-color: #f0f0f0; padding: 20px; }
                h1 { text-align: center; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #4CAF50; color: white; }
            </style>
        </head>
        <body>
            <h1>${name}'s Weekly Meal Plan</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Goal for the Week:</strong> ${goal}</p>
            <table>
                <tr>
                    <th>Day</th>
                    <th>Breakfast</th>
                    <th>Snack</th>
                    <th>Lunch</th>
                    <th>Snack</th>
                    <th>Dinner</th>
                </tr>
                <tr>
                    <td>Monday</td>
                    <td>${Breakfast}</td>
                    <td>${Snack}</td>
                    <td>${Lunch}</td>
                    <td>${Snack2}</td>
                    <td>${Dinner}</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>${Breakfast}</td>
                    <td>${Snack}</td>
                    <td>${Lunch}</td>
                    <td>${Snack2}</td>
                    <td>${Dinner}</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>${Breakfast}</td>
                    <td>${Snack}</td>
                    <td>${Lunch}</td>
                    <td>${Snack2}</td>
                    <td>${Dinner}</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>${Breakfast}</td>
                    <td>${Snack}</td>
                    <td>${Lunch}</td>
                    <td>${Snack2}</td>
                    <td>${Dinner}</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>${Breakfast}</td>
                    <td>${Snack}</td>
                    <td>${Lunch}</td>
                    <td>${Snack2}</td>
                    <td>${Dinner}</td>
                </tr>
            </table>
            <button type="button" onclick="window.print()">Print Planner</button>

        </body>
        </html>
    `);
    mealPlanWindow.document.close();
}
// Function to validate email using simple regex
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
// Function to clear the planner
function clearPlanner() {
    document.getElementById('mealPlanForm').reset();
}
