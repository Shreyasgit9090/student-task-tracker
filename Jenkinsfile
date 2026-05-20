pipeline {

    agent any

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Repository Cloned'
            }
        }

        stage('Install Backend Dependencies') {
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

    }
}