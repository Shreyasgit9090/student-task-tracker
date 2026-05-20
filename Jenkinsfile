pipeline {

    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'YOUR_GITHUB_REPO_LINK'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Security Check') {
            steps {
                dir('backend') {
                    bat 'npm audit'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t student-task-backend ./backend'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 5000:5000 student-task-backend'
            }
        }
    }
}