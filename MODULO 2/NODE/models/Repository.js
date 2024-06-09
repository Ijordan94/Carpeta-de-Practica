const Activity = require("../models/Activity")
class Repository{
    constructor(){
        this.activities = [];
        this.id = 0;

    }

    createActivity(title,description,imgURL){
        const newActivity = new Activity (this.id,title,description,imgURL);
        this.id++;
        this.activities.push(newActivity);
    }

    getAllActivities(){
        return this.activities;
    }
}

module.exports = Repository;
