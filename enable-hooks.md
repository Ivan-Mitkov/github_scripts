#### in .git/hooks rename file by removing .sample extension

#### in vs code => Settings => search type exclude=>remove \*\*/.git

#### enable post-commit hook

##### create file post-commit in .git/hooks

##### modify permissions

cd .git/hooks

ls -la

if not -rwxr-xr-x for post-commit

chmod +x post-commit
