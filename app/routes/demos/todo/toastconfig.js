module.exports = {
 
    successToast: function (msg) {
        return {
            message: msg,
            placement: 'top',
            mod: 'success',
            timeout: 2000
        }
    },
    longSuccessToast: function(msg){
        return {
            message: msg,
            placement: 'top',
            mod: 'success',
            timeout: 4000
        }
    },
    errorToast: function (msg) {
        return {
            message: msg,
            placement: 'top',
            mod: 'error',
            timeout: 2000
        }
    },
    longErrorToast: function (msg) {
        return {
            message: msg,
            placement: 'top',
            mod: 'error',
            timeout: 2000
        }
    },
    warningToast: function (msg) {
        return {
            message: msg,
            placement: 'top',
            mod: 'warning',
            timeout: 2000
        }
    },
    longWarningToast: function (msg) {
        return {
            message: msg,
            placement: 'top',
            mod: 'warning',
            timeout: 4000
        }
    },
    jobSuccessToast: function(msg) {
        return {
            message: msg,
            placement: 'top',
            mod: 'success',
            timeout: 4000
        }
    },  
    twoLineToast: {
        topText: "Job is processing.",
        bottomText: "Updates will be reflected as soon as the job is completed.",
        timeout: 4000
    },
 
}