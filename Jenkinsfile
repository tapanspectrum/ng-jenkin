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
}