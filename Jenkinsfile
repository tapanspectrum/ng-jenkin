pipeline {
    agent any

    stages {

        stage('Building') {
            steps {
                echo 'The Code will be now be built into an artifact'
                sh "npm install"
                sh "npm run-script build"
            }
        }
        stage('Artifact Archiving') {
            steps {
                echo 'The Artifact will be uploaded to an artifact repository'
                // archiveArtifacts artifacts: '*.jar', fingerprint: true
                // sh "tar czf ng_app-$BUILD_NUMBER.tar.gz node_modules dist src package.json angular.json"
                echo 'The Artifact zip successfully'
            }
        }
        stage('Testing') {
            steps {
                echo 'The Artifact will be tested'
                // sh "npm run-script test"
            }
        }
        stage('Staging') {
            steps {
                echo 'Currently skipped'
                echo 'The Artifact is staged onto the staging server'
            }
        }

        stage('Deploy') {
            steps {
                echo 'The software will now be deployed!'
                sh "rm -r /var/www/demo/*" 
                sh "mv dist/ng-jenkin/* /var/www/demo"
            }
        }

        
    } 
    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'           
            sendMail(currentBuild.currentResult)
        }
        failure {
            echo 'This will run only if failed'
            sendMail(currentBuild.currentResult)
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
            sendMail(currentBuild.currentResult)
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
            sendMail(currentBuild.currentResult)
        }
    }  
}

/**
* Send notifications based on build status string
*/
def sendMail(String buildStatus = 'STARTED') {
    // build status of null means successful
      buildStatus = buildStatus ?: 'SUCCESS'
    
      // Default values
      def colorName = 'RED'
      def colorCode = '#FF0000'
      def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
      def summary = "${subject} (${env.BUILD_URL})"
      def details = """<p>${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
        <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>"""

    // Override default values based on build status
    if (buildStatus == 'STARTED') {
        color = 'YELLOW'
        colorCode = '#FFFF00'
    } else if (buildStatus == 'SUCCESS') {
        color = 'GREEN'
        colorCode = '#00FF00'
    } else {
        color = 'RED'
        colorCode = '#FF0000'
    }
    echo subject
    echo summary
    echo details
    // Send notifications
    emailext (
        to: 'acharyadevelopment@gmail.com',
        subject: subject,
         body: details,
         recipientProviders: [[$class: 'DevelopersRecipientProvider']]
    )
}