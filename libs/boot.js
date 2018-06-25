module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log(`Slack integration API started - PORT ${app.get('port')}`)
    });    
}