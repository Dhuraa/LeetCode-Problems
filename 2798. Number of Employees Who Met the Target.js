var numberOfEmployeesWhoMetTarget = function(hours, target) {
    return hours.filter((val)=>{
        return val>= target;
    }).length
};
hours = [5,1,4,2,2];
target = 6;
numberOfEmployeesWhoMetTarget(hours,target)