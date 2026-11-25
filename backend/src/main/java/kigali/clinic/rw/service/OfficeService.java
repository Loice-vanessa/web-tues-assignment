package kigali.clinic.rw.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kigali.clinic.rw.domain.Office;
import kigali.clinic.rw.repository.OfficeRepository;

@Service
public class OfficeService {

    public static final String SAVED = "Office is saved successfully";
    public static final String DELETED = "Office is deleted successfully";

    @Autowired
    private OfficeRepository officeRepository;

    public String saveOffice(Office office) {
        if (officeRepository.existsByOfficeNumber(office.getOfficeNumber())) {
            return "Office with number " + office.getOfficeNumber() + " already exists";
        }
        officeRepository.save(office);
        return SAVED;
    }

    public List<Office> getAllOffices() {
        return officeRepository.findAll();
    }

    public String deleteOfficeByNumber(int officeNumber) {
        Optional<Office> office = officeRepository.findByOfficeNumber(officeNumber);
        if (office.isEmpty()) {
            return "Office with number " + officeNumber + " not found";
        }
        officeRepository.delete(office.get());
        return DELETED;
    }
}
