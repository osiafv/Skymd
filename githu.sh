foldername=$2
commitmsg=$3

pushrepo(){
    git init 
    git remote add origin git@github.com:osiafv/$foldername.git
    git add .
    git commit -m "$commitmsg"
    git push -u origin master
}

update(){
    git add .
    git commit -m "$foldername"
    git push
}



if [ $1 == "repo" ]
then
    node /home/runner/bot/gith.js $2 $3
elif [ $1 == "pushrepo" ]
then
    pushrepo
elif [ $1 == "update" ]
then
    update
fi