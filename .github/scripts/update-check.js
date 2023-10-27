const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
    //auth: process.env.PERSONAL_ACCESS_TOKEN,
    //auth: process.env.ADDITIONAL_ACCESS_TOKEN,
});

async function createCheck() {
    const response = await octokit.checks.update({
        owner: process.env.DEV_HUB_REPO.split('/')[0],
        repo: process.env.DEV_HUB_REPO.split('/')[1],
        check_run_id: process.env.DEV_HUB_CHECK,
        name: 'DevHub',
        status: 'completed',
        conclusion: 'success',
        completed_at: new Date().toISOString(),
        output: {
            title: 'Developer Portal healthcheck',
            summary: 'Building the project in DevHub (Developer Portal)',
        },
    });

    console.log('Check updated:', response.data);
}

createCheck();