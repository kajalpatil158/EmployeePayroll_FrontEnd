#!/bin/bash -x

cd  /home/ubuntu/EmployeePayroll_Frontend
working_directory=$(pwd)
echo "Present working directory = $working_directory"
pm2 delete 0
pm2 start npm --name "EmployeeFrontEnd" -- start
