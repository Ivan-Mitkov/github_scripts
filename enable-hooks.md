#### in .git/hooks rename file by removing .sample extension

#### in vs code => Settings => search type exclude=>remove \*\*/.git

#### enable post-commit hook

##### create file post-commit in .git/hooks

##### modify permissions

cd .git/hooks

ls -la

if not -rwxr-xr-x for post-commit

chmod +x post-commit

https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks

### Disable rebasing

in pre-rebase exit 1


