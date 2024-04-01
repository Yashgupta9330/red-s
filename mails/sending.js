const sendingTemplate = (users) => {
    let userDataHTML = ''; // HTML string to store user data table rows

    // Generate table rows for each user
    users.forEach(user => {
        userDataHTML += `
            <tr>
                <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${user.name}</td>
                <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${user.email}</td>
                <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${user.phone}</td>
                <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${user.hobby}</td>
            </tr>
        `;
    });

    // Returning the complete HTML template with user data table
    return `<!DOCTYPE html>
        <html>	
        <head>
            <meta charset="UTF-8">
            <title>User Data Email</title>
            <style>
                body {
                    background-color: #ffffff;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.4;
                    color: #333333;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: center;
                }
                table {
                    border-collapse: collapse;
                    width: 100%;
                }
                th, td {
                    border: 1px solid #dddddd;
                    text-align: left;
                    padding: 8px;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>User Data</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Hobby</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${userDataHTML} <!-- Insert user data table rows here -->
                    </tbody>
                </table>
            </div>
        </body>
        </html>`;
}

module.exports = sendingTemplate;