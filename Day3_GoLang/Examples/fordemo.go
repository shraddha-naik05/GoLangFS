package main
import "fmt" 
func main() {
	PythonStyle()
}
func fordemo() {
	n := 1
	for n < 5 {
		n*= 2
	}
	fmt.Println(n)
}
func PythonStyle() {
	strings :=[]string{"hello","world","Golang","NIE"}
	for _, s := range strings {
		fmt.Println(s)
	}
}