// join by lookup operator

// normally amra jokhon sql a kaj kori, sql a kaj korar somoy amra inner join dey, left join dei, right join dei, orthat ae je table a table a join deye deye data ber kore neye ashar  jei process ta , sei process tai kinto mongodb te o jodi akoe vabe korte chai sekhetre amader loopup operator use korte hobe.

//loopup operator deye amra collection er sathe collection join deye deye data query korbo.

//db.products.aggregate([
 //   {$lookup:{from:"categories",localfield:"categoriyID":foreignField:"categoryID",as:"category"}}
//])

//(from) property hocche jar sathe join decche sei collection er name.(localfield) mane hocche amar exesting jei result ase sei result er  kon key er sathe join dete chacchi . (foreignField)  mane hocche ami jei collection er sathe reletion korsi ba jei collextion er sathe join decche sei collection er key.localfield er sathe foreignField kinto milte hobe.