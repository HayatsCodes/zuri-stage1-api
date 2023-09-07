const express = require('express');

const app = express();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get('/api', (req, res) => {
    
    const currentDate = new Date();

    const {slack_name, track} = req.query;
    const current_day = daysOfWeek[currentDate.getDay()];
    const utc_time = `${currentDate.toISOString().split('.')[0]}Z`;
    const github_file_url = 'https://github.com/HayatsCodes/zuri-stage1-api/blob/main/src/app.js';
    const github_repo_url = 'https://github.com/HayatsCodes/zuri-stage1-api';
    const status_code = '200';

    res.status(200).json(
        {
            slack_name,
            current_day,
            utc_time,
            track,
            github_file_url,
            github_repo_url,
            status_code
        }
    )
});

app.listen(3000, () => {
    console.log('App started on port 3000');
})