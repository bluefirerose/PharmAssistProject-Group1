package net.mdjava.springbootbackend;
import net.mdjava.springbootbackend.model.Category;
import net.mdjava.springbootbackend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootBackendApplication.class, args);
    }
    
     @Autowired
     private CategoryRepository categoryRepository;

    @Override
    public void run(String... args) throws Exception {
        Category category = new Category();
         category.setName("Rose");
         category.setAddress("Valenzuela");
         category.setContactno("09461970556");
         category.setEmailadd("gg@gmail.com");
         categoryRepository.save(category);
    
    }
}