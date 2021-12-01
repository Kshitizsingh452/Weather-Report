import java.lang.Exception;
import java.util.Scanner;
IllegalBankException(String str){
    super(str);
}
IllegalBankException(){
    this("Invalid Details");
}
class Bank_Account{
    String Name;
    int Roll;
    int Age;
    long AccountNumber;
    char AccountType;
    int Balance;

    void Create(){
        Scanner sc=new Scanner(System.in);
        System.out.println("ENTER YOUR NAME");
        Name=sc.nextLine();
        Roll=sc.nextInt();
        Age=sc.nextInt();
        AccountNumber=sc.nextLong();
        AccountType=sc.next().charAt(0);
        if(Age<=15|| Age>=100){
            throw new IllegalBankException("Age not accepted");
        }
    }
}
public class lab{
 public static void main(String[] args) {
  
    
}
}