#!/bin/bash -x

cd  /home/ubuntu/EmployeePayroll_Frontend
working_directory=$(pwd)
echo "Present working directory = $working_directory"
npm i
echo "Installing packages"
npm run build
echo "build success!"
npm start
