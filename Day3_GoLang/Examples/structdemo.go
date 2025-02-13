package main
import "fmt"
type student struct{
	Name string
	Regno float64
	Dept string
} 
func main() {
	st := student{Name:"ABC",Regno:12.0, Dept:"CS"}
	fmt.Println(st)
	fmt.Println("Name: ",st.Name,"\nRegistration number: ",st.Regno,"\n department: ",st.Dept)
}