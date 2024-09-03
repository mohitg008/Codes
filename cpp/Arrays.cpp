#include<iostream>
#include<stdio.h>
using namespace std;




/* struct Rectangle
{
    int length;
    int breadth;

};
int main()
{
  struct Rectangle r;
  Rectangle *p=&r;
  r.length=20;
    (*p).breadth=30;
    cout<<r.length<<endl;
    cout<<r.breadth<<endl;
    cout<<p->length<<endl;
    cout<<p->breadth<<endl;
} */

/* //refrence
int main()
{
    int a=10;
    int &r=a;
    r=25;
    cout<<a<<endl;
}
 */

/* //POINTER TO AN ARRAY
int main()
{
   // int A[5]={2,4,6,8,10};
   
    int *p;
    //p= (int*)malloc(5*sizeof(int));
    p=new int[5];
    //p=A;
    p[0]=1;
    p[1]=3;
    p[2]=5;
    p[3]=7;
    p[4]=11;
    p[5]=15;
    
    for(int i=0;i<5;i++)
    {
        cout<<p[i]<<endl;
    }
//free(p);
delete[]p;
}

 */

/* int main(){

int a = 10;
int *p=&a;
//p=&a;

//cout<<a;
printf("using pointer %d\n", *p);
printf("using pointer %d\n", p);
printf("using pointer %d\n", &a);

}
 */

/* 
// structs
struct Rectangle
{
    int length;
    int breadth;
};
struct Complex
{
    int real;
    int img;
};

struct Student
{
int roll;//4 
char name[25];//25
char dept[10];//10
char address[50];// 50
};

int main()
{
    //struct Rectangle r; //declration
    struct Rectangle r={10,5}; //declration + initialization
    r.length = 15;
    r.breadth = 10;
    cout<<r.length<<endl;

    struct Student s;

    s.roll=10;
     
} */

/* #include<iostream>
#include<stdio.h>
//initializing an array
using namespace std;

int main()
{
    int n;
    cout<<"Enter Size";
    cin>>n;
    int A[n];
    A[0]=2;
    for(int x:A)
    {
        cout<<x<<endl;
    }
} */



