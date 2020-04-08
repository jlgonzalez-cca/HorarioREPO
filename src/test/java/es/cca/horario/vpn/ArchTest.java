package es.cca.horario.vpn;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("es.cca.horario.vpn");

        noClasses()
            .that()
            .resideInAnyPackage("es.cca.horario.vpn.service..")
            .or()
            .resideInAnyPackage("es.cca.horario.vpn.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..es.cca.horario.vpn.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
