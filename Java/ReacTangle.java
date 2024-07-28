import java.lang.*;

class ReacTangle{

    public static void main(String... args)
    {
        //Square
        System.out.println("Square");
        for(int i=0;i<10; i++)
        {
            for(int j=0;j<10;j++)
            {
                System.out.print("* ");
            }
            System.out.println();
        }

        // Reactangle
        System.out.println("Reactangle");
        for(int i=0;i<5; i++)
        {
            for(int j=0;j<10;j++)
            {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}