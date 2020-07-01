@echo off
cd compiler
lex expr.l
yacc -d expr.y
gcc lex.yy.c y.tab.c
./a.out < input.txt 