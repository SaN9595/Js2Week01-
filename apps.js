const books=['The_Lion_the_Witch_and_the_Wardrobe','A_History_of_Adventure','The_Adventures_of_Pinocchio','The_Da_Vinci_Code','Harry_Potter_and_the_Chamber_of_Secrets','Harry_Potter_and_the_Prisoner_of_Azkaban','Harry_Potter_and_the_Goblet_of_Fire','Harry_Potter_and_the_Order_of_the_Phoenix','Harry_Potter_and_the_Half_Blood_Prince','Harry_Potter_and_the_Deathly_Hallows'];


function generateUl(books)
{
    document.write("<ul>");
    for(let i=0;i<books.length;i++)
    {
        document.write("<li id='"+books[i]+"'>"+books[i]+"</li>");    
    }
    document.write("</ul>");
}

generateUl(books);

//1.4

let BooksObj = {
    book01: { title: "The_Lion_the_Witch_and_the_Wardrobe", language: "english", author: "C_S_Lewis" },
    book02: {
        title: "A_History_of_Adventure", language: "english",
      author: "H_Rider_Haggard"
    },book03: { title: "The_Adventures_of_Pinocchio", language: "english", author: "Carlo_Collodi" },
    book04: {
      title: "The_Da_Vinci_Code", language: "english",
      author: "Dan_Brown"
    },book05: { title: "Harry_Potter_and_the_Chamber_of_Secrets", language: "english", author: "j_k_rowling" },
    book06: {
      title: "Harry_Potter_and_the_Prisoner_of_Azkaban", language: "english",
      author: "j_k_rowling"
    },book07: { title: "Harry_Potter_and_the_Goblet_of_Fire", language: "english", author: "j_k_rowling" },
    book08: {
      title: "Harry_Potter_and_the_Order_of_the_Phoenix", language: "english",
      author: "j_k_rowling"
    },book09: { title: "Harry_Potter_and_the_Half_Blood_Prince", language: "english", author: "j_k_rowling" },
    book10: {
      title: "Harry_Potter_and_the_Deathly_Hallows", language: "english",
      author: "j_k_rowling"
    }
  };

  function writeInfo(obj)
  {
    document.write("<div>");
    for(let books in obj)
    {
        document.write("<span>");
            var book=obj[books];
            for(let bookInfo in book)
            {
                if(bookInfo==='title')
                {
                    document.write("<h2>"+book[bookInfo]+"</h2>");
                }
                if(bookInfo==='author')
                {
                    document.write("<br/>");
                    document.write("<b>author : </b>"+book[bookInfo]);
                }
                if(bookInfo==='language')
                {
                    document.write("<br/>");
                    document.write("<b>language : </b>"+book[bookInfo]);
                }
            }
            document.write("</span>");
          document.write("<hr/>")
    }
        document.write("</div>");
  }

  writeInfo(BooksObj);

  //1.7

  let BooksImgs = {
    he_Lion_the_Witch_and_the_Wardrobe: "100915.jpg",
    A_History_of_Adventure:"download.jpeg",
    he_Adventures_of_Pinocchio: "the-adventures-of-pinocchio-ukvhsfront.jpeg",
    The_Da_Vinci_Code: "41KuPr7kpZL._SX277_BO1,204,203,200_.jpg",
    Harry_Potter_and_the_Chamber_of_Secrets:"images.jpeg" ,
    Harry_Potter_and_the_Prisoner_of_Azkaban: "images.jpeg",
    Harry_Potter_and_the_Goblet_of_Fire: "41AF6KHRGML._SX329_BO1,204,203,200_.jpg",
    Harry_Potter_and_the_Order_of_the_Phoenix: "Order_of_the_Phoenix_New_Cover.jpg",
    Harry_Potter_and_the_Half_Blood_Prince: "512duVU966L._SX322_BO1,204,203,200_.jpg",
    Harry_Potter_and_the_Deathly_Hallows: "5128ATd9dSL._SX258_BO1,204,203,200_.jpg",
    
  };


  function addImg(obj)
  {
    for(let books in obj)
    {
        var book=obj[books];
            for(let bookInfo in book)
            {
            }
    }
  }
